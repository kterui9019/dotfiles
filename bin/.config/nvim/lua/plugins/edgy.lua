return {
  {
    "folke/edgy.nvim",
    optional = true,
    opts = function(_, opts)
      opts.right = opts.right or {}
      -- Claude Code (Snacksのターミナル) を右サイド 40% 幅で表示
      table.insert(opts.right, 1, {
        ft = "snacks_terminal",
        size = { width = 0.4 }, -- ← Grug Far と同じ 40%
        title = "Claude Code",
        -- Claude のターミナルだけに限定
        filter = function(buf, win)
          local w = vim.w[win]
          if not (w.snacks_win and w.snacks_win.position == "right" and w.snacks_win.relative == "editor") then
            return false
          end
          local b = vim.b[buf] or {}
          local title = (b.term_title or b.snacks_title or ""):lower()
          return title:find("claude") ~= nil
        end,
      })
    end,
  },
}
