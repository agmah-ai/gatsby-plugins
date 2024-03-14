import type { CreateWebpackConfigArgs } from "gatsby";

export const onCreateWebpackConfig = ({ actions, stage, getConfig }: CreateWebpackConfigArgs) => {
  if (stage === "build-javascript") {
    const config = getConfig();

    // Find the minimizer in the webpack configuration
    const minifyJSIndex = config.optimization.minimizer.findIndex(
      (minimizer: any) => minimizer.constructor.name === "TerserPlugin",
    );



    // Check if the TerserPlugin is found
    if (minifyJSIndex !== -1) {
      const terserPluginOptions = config.optimization.minimizer[minifyJSIndex].options;

      terserPluginOptions.terserOptions = {
        ...terserPluginOptions.terserOptions,
        format: {
          comments: false,
        },
      };

      terserPluginOptions.extractComments = false;

      actions.replaceWebpackConfig(config);
    }
  }
};
