-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6lualualua
-- Forum: https://www.reddit.com/r/lunarvim/
-- Discord: https://discord.com/invite/Xb9B4Ny
lvim.plugins = {
	{
		"loctvl842/monokai-pro.nvim",
		config = function()
			require("monokai-pro").setup()
		end
	}
}

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
lvim.keys.normal_mode["tt"] = ":ToggleTerm size=10 direction=horizontal"
vim.cmd('autocmd vimenter * :NvimTreeToggle')
