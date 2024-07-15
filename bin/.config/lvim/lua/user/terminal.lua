-- ターミナルを開く関数
local function open_terminal(...)
  local args = {...}
  local open_type = 'new'
  local shell = vim.o.shell
  local path = vim.fn.getcwd()

  if #args > 0 and args[1] ~= '' then
    open_type = args[1]
  end
  if #args > 1 and args[2] ~= '' then
    path = args[2]
  end
  if #args > 2 and args[3] ~= '' then
    shell = args[3]
  end

  -- カレントディレクトリを設定
  vim.cmd(string.format('lcd %s', path))

  -- ウィンドウを分割し、対応するコマンドを実行
  if open_type == 'new' then
    vim.cmd('new')
  elseif open_type == 'vnew' then
    vim.cmd('vnew')
  elseif open_type == 'tabnew' then
    vim.cmd('tabnew')
  end

  -- ターミナルバッファを新規に作成して、ターミナルを開く
  local term_buf = vim.api.nvim_create_buf(true, false) -- インラインバッファの作成
  vim.api.nvim_set_current_buf(term_buf)
  vim.fn.termopen(shell)

  -- ターミナルバッファの設定
  vim.bo.buflisted = false
  vim.bo.bufhidden = 'hide'
  vim.wo.wrap = false  -- ラップ設定をウィンドウオプションとして設定
  vim.cmd('startinsert')
end

-- コマンドの定義
vim.api.nvim_create_user_command('OpenTerminal', function(opts)
  open_terminal(unpack(opts.fargs))
end, { nargs = '*' })

-- キーマッピングの設定
local noremap_options = { noremap = true, silent = true }

vim.api.nvim_set_keymap('n', '<C-s>\\', ':OpenTerminal vnew<CR>', noremap_options)
vim.api.nvim_set_keymap('n', '<C-s>-', ':OpenTerminal<CR>', noremap_options)
vim.api.nvim_set_keymap('n', '<C-s>^', ':OpenTerminal tabnew<CR>', noremap_options)
vim.api.nvim_set_keymap('t', '<C-s>\\', '<C-w>:OpenTerminal vnew<CR>', noremap_options)
vim.api.nvim_set_keymap('t', '<C-s>-', '<C-w>:OpenTerminal<CR>', noremap_options)
vim.api.nvim_set_keymap('t', '<C-s>^', '<C-w>:OpenTerminal tabnew<CR>', noremap_options)


--
-- function! s:cd_repo(shell, repo) abort
-- 	exe 'lcd' trim(system('ghq root')) .. '/' .. a:repo
-- 	call s:open_terminal('new', '', a:shell)
-- 	exe 'wincmd k'
-- 	pwd
-- endfunction
-- 
-- function! s:repo(multi, cb) abort
-- 	if executable('ghq') && exists('*fzf#run()') && executable('fzf')
-- 		call fzf#run({
-- 					\ 'source': systemlist('ghq list'),
-- 					\ 'sink': a:cb,
-- 					\ 'options': a:multi,
-- 					\ 'down': '40%'},
-- 					\ )
-- 	else
-- 		echo "doesn't installed ghq or fzf.vim(require fzf)"
-- 	endif
-- endfunction
-- 
-- command! Repo call s:repo('+m', function('s:cd_repo', [&shell]))

local M = {}

-- Change directory to the selected repository and open a terminal
function M.cd_repo(shell, repo)
  local ghq_root = vim.fn.trim(vim.fn.system('ghq root'))
  vim.cmd('lcd ' .. ghq_root .. '/' .. repo)
  -- Assuming s:open_terminal is a function to open a terminal, you might need to implement or adjust this part
  -- M.open_terminal('new', '', shell)
  vim.cmd('wincmd k')
  print(vim.fn.getcwd())
end

-- List repositories using ghq and select one with fzf
function M.repo(multi, cb)
  if vim.fn.executable('ghq') == 1 and vim.fn.exists('*fzf#run') == 1 and vim.fn.executable('fzf') == 1 then
    local fzf = require('fzf')
    local source = vim.fn.systemlist('ghq list')
    local sink = function(selected)
      local repo = selected[1]
      cb(shell, repo) -- Adjust according to how you plan to use the callback
    end
    local options = multi
    local down = '40%'
    -- You might need to adjust this part according to how fzf is set up in your Lua configuration
    -- fzf.run({source = source, sink = sink, options = options, down = down})
  else
    print("ghq or fzf.vim (require fzf) isn't installed")
  end
end

-- Command to list and select repositories
vim.api.nvim_create_user_command('Repo', function()
  M.repo('+m', M.cd_repo)
end, {})