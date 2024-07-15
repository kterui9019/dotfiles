-- Below config is required to prevent copilot overriding Tab with a suggestion
-- when you're just trying to indent!
local has_words_before = function()
    if vim.api.nvim_buf_get_option(0, "buftype") == "prompt" then return false end
    local line, col = unpack(vim.api.nvim_win_get_cursor(0))
    return col ~= 0 and vim.api.nvim_buf_get_text(0, line-1, 0, line-1, col, {})[1]:match("^%s*$") == nil
end
local on_tab = vim.schedule_wrap(function(fallback)
    local cmp = require("cmp")
    if cmp.visible() and has_words_before() then
        cmp.select_next_item({ behavior = cmp.SelectBehavior.Select })
    else
        fallback()
    end
end)

lvim.builtin.cmp.mapping["<Tab>"] = on_tab

-- バッファの内容全体を使って Copilot とチャットする
function CopilotChatBuffer()
  local input = vim.fn.input("Quick Chat: ")
  if input ~= "" then
    require("CopilotChat").ask(input, { selection = require("CopilotChat.select").buffer })
  end
end

-- telescope を使ってアクションプロンプトを表示する
function ShowCopilotChatActionPrompt()
  local actions = require("CopilotChat.actions")
  require("CopilotChat.integrations.telescope").pick(actions.prompt_actions())
end

local noremap_options = { noremap = true, silent = true }
vim.api.nvim_set_keymap('n', '<C-c>q', '<cmd>lua CopilotChatBuffer()<cr>', noremap_options)
vim.api.nvim_set_keymap('n', '<C-c>p', '<cmd>lua ShowCopilotChatActionPrompt()<cr>', noremap_options)
vim.api.nvim_set_keymap('v', '<C-c>p', '<cmd>lua ShowCopilotChatActionPrompt()<cr>', noremap_options)

