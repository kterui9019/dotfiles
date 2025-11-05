local utils = require("config.utils")

return {
  { "nvim-lua/plenary.nvim" },
  {
    "brandoncc/git-worktree.nvim",
    name = "git-worktree.nvim",
    branch = "catch-and-handle-telescope-related-error",
  },
  {
    "nvim-telescope/telescope.nvim",
    version = "0.1.5",
    keys = {
      {
        "<leader>gw",
        function()
          require("telescope").extensions.git_worktree.git_worktrees({
            path_display = { "truncate" },
          })
        end,
        desc = "List Git Worktree",
      },
      {
        "<leader>gW",
        function()
          require("telescope").extensions.git_worktree.create_git_worktree()
        end,
        desc = "New Git Worktree",
      },
    },
    config = function(_, opts)
      local telescope = require("telescope")
      telescope.setup(opts)
      local conditional_func = utils.conditional_func
      -- https://github.com/ThePrimeagen/git-worktree.nvim
      conditional_func(telescope.load_extension, utils.is_available("git-worktree.nvim"), "git_worktree")
    end,
  },
}
