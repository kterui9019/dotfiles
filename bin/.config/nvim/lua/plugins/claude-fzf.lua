return {
  "pittcat/claude-fzf.nvim",
  dependencies = {
    "ibhagwan/fzf-lua",
    "coder/claudecode.nvim",
  },
  opts = {
    auto_context = true,
    batch_size = 10,
  },
  cmd = {
    "ClaudeFzf",
    "ClaudeFzfFiles",
    "ClaudeFzfGrep",
    "ClaudeFzfBuffers",
    "ClaudeFzfGitFiles",
    "ClaudeFzfDirectory",
  },
  keys = {
    { "<leader>aff", "<cmd>ClaudeFzfFiles<cr>", desc = "Claude: Add files" },
    { "<leader>afg", "<cmd>ClaudeFzfGrep<cr>", desc = "Claude: Search and add" },
    { "<leader>afb", "<cmd>ClaudeFzfBuffers<cr>", desc = "Claude: Add buffers" },
    { "<leader>afg", "<cmd>ClaudeFzfGitFiles<cr>", desc = "Claude: Add Git files" },
    { "<leader>afd", "<cmd>ClaudeFzfDirectory<cr>", desc = "Claude: Add directory files" },
  },
}
