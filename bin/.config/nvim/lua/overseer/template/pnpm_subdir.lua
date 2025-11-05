-- lua/overseer/template/pnpm_subdir.lua
return {
  name = "pnpm run (subdir)",
  builder = function(params)
    return {
      cmd = { "pnpm" },
      args = { params.script },
      cwd = vim.fn.expand("data_dashboard/" .. params.subdir),
      components = { "default" },
    }
  end,
  params = {
    subdir = {
      type = "enum",
      choices = { "data_dashboard", "search-viewer" },
    },
    script = {
      type = "string",
      default = "dev",
    },
  },
}
