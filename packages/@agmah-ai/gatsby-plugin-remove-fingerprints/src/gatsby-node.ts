import type { CreateWebpackConfigArgs } from "gatsby";

export const onCreateWebpackConfig = ({ stage, getConfig, actions }: CreateWebpackConfigArgs) => {
  if (stage === "build-javascript") {
    const newWebpackConfig = {
      ...getConfig(),
      output: {
        filename: `[name].js`,
        chunkFilename: `[name].js`,
        path: getConfig().output.path,
        publicPath: getConfig().output.publicPath,
      },
    };

    actions.replaceWebpackConfig(newWebpackConfig);
  }
};
