-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6lualualua
-- Forum: https://www.reddit.com/r/lunarvim/
-- Discord: https://discord.com/invite/Xb9B4Ny
--
require("user.terminal")
require("user.copilotsettings")
local select = require('CopilotChat.select')

lvim.plugins = {
	{
		"loctvl842/monokai-pro.nvim",
		config = function()
			require("monokai-pro").setup()
		end
	},
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    config = function()
      require("copilot").setup({
        suggestion = {
          auto_trigger = false,
        },
      })
    end
  },

  {
    "zbirenbaum/copilot-cmp",
    config = function()
      require("copilot_cmp").setup({
        suggestion = { enabled = true },
        panel = { enabled = false }
      })
    end
  },
  {
    "CopilotC-Nvim/CopilotChat.nvim",
    branch = "canary",
    dependencies = {
      { "zbirenbaum/copilot.lua" }, -- or github/copilot.vim
      { "nvim-lua/plenary.nvim" }, -- for curl, log wrapper
    },
    opts = {
      debug = true, -- Enable debugging
      -- See Configuration section for rest
      prompts = {
        Explain = {
          prompt = '/COPILOT_EXPLAIN カーソル上のコードの説明を段落をつけて書いてください。',
        },
        Tests = {
          prompt = '/COPILOT_TESTS カーソル上のコードの詳細な単体テスト関数を書いてください。',
        },
        Fix = {
          prompt = '/COPILOT_FIX このコードには問題があります。バグを修正したコードに書き換えてください。',
        },
        Optimize = {
          prompt = '/COPILOT_REFACTOR 選択したコードを最適化し、パフォーマンスと可読性を向上させてください。',
        },
        Docs = {
          prompt = '/COPILOT_REFACTOR 選択したコードのドキュメントを書いてください。ドキュメントをコメントとして追加した元のコードを含むコードブロックで回答してください。使用するプログラミング言語に最も適したドキュメントスタイルを使用してください（例：JavaScriptのJSDoc、Pythonのdocstringsなど）',
        },
        FixDiagnostic = {
          prompt = 'ファイル内の次のような診断上の問題を解決してください：',
          selection = select.diagnostics,
        }
      }
    },
  },
}

-- table.insert(lvim.plugins, {
--   "zbirenbaum/copilot-cmp",
--   event = "InsertEnter",
--   dependencies = { "zbirenbaum/copilot.lua" },
--   config = function()
--     vim.defer_fn(function()
--       require("copilot").setup() -- https://github.com/zbirenbaum/copilot.lua/blob/master/README.md#setup-and-configuration
--       require("copilot_cmp").setup() -- https://github.com/zbirenbaum/copilot-cmp/blob/master/README.md#configuration
--     end, 100)
--   end,
-- })

lvim.colorscheme = "monokai-pro"

-- tab
lvim.keys.normal_mode["te"] = ":tabedit<Return>"
-- Split window
lvim.keys.normal_mode["ss"] = ":split<Return><C-w>w"
lvim.keys.normal_mode["sv"] = ":vsplit<Return><C-w>w"
-- resize window
lvim.keys.normal_mode["sh"] = "<C-w><"
lvim.keys.normal_mode["sk"] = "<C-w>+"
lvim.keys.normal_mode["sj"] = "<C-w>-"
lvim.keys.normal_mode["sl"] = "<C-w>>"
-- Switch tab
lvim.keys.normal_mode["<S-Tab>"] = ":tabprev<Return>"
lvim.keys.normal_mode["<Tab>"] = ":tabnext<Return>"

-- init.lua (または init.vim) の設定例
-- require('toggleterm').setup{
--     size = 0.33, -- 画面の下に表示する高さ (0.33は1/3)
--     open_mapping = '<C-t>', -- キーマップでtoggletermを開く
-- }

-- vim.cmd('autocmd vimenter * :ToggleTerm size=10 direction=horizontal')
-- vim.cmd('autocmd vimenter * :ToggleTerm 2 size=10 direction=horizontal')
-- lvim.keys.normal_mode["tt"] = ":ToggleTerm size=10 direction=horizontal"

-- vim.cmd('autocmd vimenter * :NvimTreeToggle')
