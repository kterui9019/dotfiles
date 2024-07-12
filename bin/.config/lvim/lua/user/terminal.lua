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

