local function auto_activate_venv()
  local venv_path = vim.fn.getcwd() .. "/.venv"
  if vim.fn.isdirectory(venv_path) == 1 then
    vim.env.VIRTUAL_ENV = venv_path
    vim.env.PATH = venv_path .. "/bin:" .. vim.env.PATH
  end
end

vim.api.nvim_create_autocmd("VimEnter", {
  callback = function()
    auto_activate_venv()
  end,
})

-- Set GIT_EDITOR to use nvr if Neovim and nvr are available
-- https://github.com/kdheepak/lazygit.nvim/issues/22#issuecomment-2206274882
-- if vim.fn.has("nvim") == 1 and vim.fn.executable("nvr") == 1 then
--   vim.env.GIT_EDITOR = "nvr -cc split --remote-wait +'set bufhidden=wipe'"
-- end

-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")
