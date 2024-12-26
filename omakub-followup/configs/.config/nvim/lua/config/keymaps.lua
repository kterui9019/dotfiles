-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
vim.keymap.del("n", "<C-h>")
vim.keymap.del("n", "<C-j>")
vim.keymap.del("n", "<C-k>")
vim.keymap.del("n", "<C-l>")
vim.keymap.set("n", "<C-h>", ":ZellijNavigateLeft<CR>", { desc = "Go to Left Window", remap = true, silent = true })
vim.keymap.set("n", "<C-j>", ":ZellijNavigateDown<CR>", { desc = "Go to Lower Window", remap = true, silent = true })
vim.keymap.set("n", "<C-k>", ":ZellijNavigateUp<CR>", { desc = "Go to Upper Window", remap = true, silent = true })
vim.keymap.set("n", "<C-l>", ":ZellijNavigateRight<CR>", { desc = "Go to Right Window", remap = true, silent = true })
