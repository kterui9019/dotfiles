-- vim-herdr-navigation — Neovim側
-- Ctrl+h/j/k/l で Neovim の分割間を移動し、分割の端に達したら herdr のペイン
-- フォーカス移動に委譲する。herdr 環境でなければ tmux (あれば) か通常の
-- wincmd にフォールバックする。
-- https://github.com/paulbkim-dev/vim-herdr-navigation

local function nav(wincmd, dir)
  local prev = vim.api.nvim_get_current_win()
  vim.cmd("wincmd " .. wincmd)
  if vim.api.nvim_get_current_win() ~= prev then
    return
  end
  local pane_id = vim.env.HERDR_PANE_ID
  if pane_id and pane_id ~= "" then
    local herdr = vim.env.HERDR_BIN_PATH
    if herdr == nil or herdr == "" then
      herdr = "herdr"
    end
    vim.fn.system({ herdr, "pane", "focus", "--direction", dir, "--pane", pane_id })
  elseif vim.env.TMUX and vim.env.TMUX ~= "" then
    local tmux_dir = { left = "-L", down = "-D", up = "-U", right = "-R" }
    vim.fn.system({ "tmux", "select-pane", tmux_dir[dir] })
  end
end

local function map(lhs, wincmd, dir, desc)
  vim.keymap.set("n", lhs, function()
    nav(wincmd, dir)
  end, { silent = true, noremap = true, desc = desc })
end

map("<C-h>", "h", "left", "Navigate left (vim/herdr)")
map("<C-j>", "j", "down", "Navigate down (vim/herdr)")
map("<C-k>", "k", "up", "Navigate up (vim/herdr)")
map("<C-l>", "l", "right", "Navigate right (vim/herdr)")
