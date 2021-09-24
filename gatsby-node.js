const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
}) => {
  const { createNode } = actions

  createResolvers({
    StrapiAboutCoin: {
      AboutCoinImage: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiCoinUpdates: {
      UpdateImage: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiCoinInvestStep: {
      Image1: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image1.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiCoinInvestStep: {
      Image2: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image2.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiCoinInvestStep: {
      Image3: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image31.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiCoinInvestStep: {
      Image4: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image4.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiCoinInvestStep: {
      Image5: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image5.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
}

const { slugify } = require("./src/assets/utilityFunctions")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        coins: allStrapiAboutCoin {
          edges {
            node {
              id
              uid
            }
          }
        }
        steps: allStrapiCoinInvestStep {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const coins = result.data.coins.edges
  const steps = result.data.steps.edges

  const CoinTemplate = require.resolve("./src/templates/coinTemplate.tsx")
  const StepTemplate = require.resolve("./src/templates/stepTemplate.tsx")

  coins.forEach((coin, index) => {
    createPage({
      path: `/coins/${slugify(coin.node.uid)}`,
      component: CoinTemplate,
      context: {
        coinuid: coin.node.uid,
      },
    })
  })
  steps.forEach((step, index) => {
    createPage({
      path: `/steps/${slugify(step.node.uid)}`,
      component: StepTemplate,
      context: {
        stepuid: step.node.uid,
      },
    })
  })
}
