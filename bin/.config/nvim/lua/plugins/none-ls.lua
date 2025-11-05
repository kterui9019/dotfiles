return {
  "nvimtools/none-ls.nvim",
  opts = function(_, opts)
    opts.sources = vim.tbl_filter(function(src)
      return src.name ~= "trim_newlines"
    end, opts.sources or {})
  end,
}
