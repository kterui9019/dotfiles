return {
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      pyright = {
        settings = {
          python = {
            pythonPath = ".venv/bin/python",
            venvPath = ".",
            analysis = {
              extraPaths = { "." },
            },
          },
        },
      },
      -- ruff = {
      --   mason = false,
      --   autostart = false,
      -- },
      -- pylsp = {
      --   mason = false,
      --   autostart = false,
      -- },
    },
  },
}
