-- ~/.config/nvim/lua/plugins/jsonls-disable-format.lua
return {
  "neovim/nvim-lspconfig",
  opts = {
    setup = {
      jsonls = function(_, opts)
        -- 1) LSP 側でフォーマッタ機能をオフ
        opts.init_options = { provideFormatter = false }

        -- 2) on_attach で念押し
        opts.on_attach = function(client, _)
          client.server_capabilities.documentFormattingProvider = false
        end
      end,
    },
  },
}
