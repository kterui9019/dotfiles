return {
  "jose-elias-alvarez/null-ls.nvim",
  opts = function(_, opts)
    local null_ls = require("null-ls")
    opts.sources = {
      -- Formatter
      null_ls.builtins.formatting.black,
      null_ls.builtins.formatting.isort,
      -- Linter
      null_ls.builtins.diagnostics.flake8,
    }
  end,
}
