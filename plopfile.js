const {
    viewExists,
    hooksExists,
    factoryExists,
    getNavigators,
    componentExists,
    interfaceExists,
    navigatorExistsForViews,
  } = require("./src/utils/componentExists");
  
  module.exports = (plop) => {
    plop.setGenerator("Page", {
      description: "Create a new Function Page",
      prompts:
        getNavigators().length > 0
          ? [
              {
                type: "list",
                name: "navigator",
                message: "Belongs to which example?",
                default: getNavigators()[0],
                choices: () => getNavigators(),
              },
              {
                type: "input",
                name: "name",
                message: "What should it be called?",
                default: "Home Page",
                validate: (value, otherValues) => {
                  if (/.+/.test(value)) {
                    if (otherValues.navigator != "Default") {
                      return navigatorExistsForViews(
                        value,
                        "components",
                        otherValues.navigator
                      )
                        ? "A component or container with this name already exists"
                        : true;
                    } else {
                      return viewExists(value)
                        ? "A component or container with this name already exists"
                        : true;
                    }
                  }
                  return "The name is required";
                },
              },
            ]
          : [
              {
                type: "input",
                name: "name",
                message: "What should it be called?",
                default: "Home Page",
                validate: (value) => {
                  if (/.+/.test(value)) {
                    return viewExists(value)
                      ? "A component or container with this name already exists"
                      : true;
                  }
                  return "The name is required";
                },
              },
            ],
      actions: (data) => {
        const path = "src/containers/{{pascalCase name}}/Layout/index.tsx";
  
        const pathStyles = "src/containers/{{pascalCase name}}/Layout/styles.ts";
  
        const componentTemplate = "./__templates__/view/view_layout_index.js.hbs";
  
        const pathToIndex = "src/containers/{{pascalCase name}}/index.tsx";
  
        const pathToIndexData = "src/containers/{{pascalCase name}}/data.ts";
  
        const componentTemplateStyles = "./__templates__/view/styles.js.hbs";
  
        const pageToIndex = "src/app/{{camelCase name}}/page.tsx";
  
        const actions = [
          {
            type: "add",
            path: path,
            templateFile: componentTemplate,
          },
          {
            type: "add",
            path: pathStyles,
            templateFile: componentTemplateStyles,
          },
          {
            type: "add",
            path: pathToIndex,
            templateFile: "./__templates__/view/view_index.js.hbs",
          },
          {
            type: "add",
            path: pathToIndexData,
            templateFile: "./__templates__/view/data.js.hbs",
          },
          {
            type: "add",
            path: pageToIndex,
            templateFile: "./__templates__/view/page_index.js.hbs",
          },
        ];
        return actions;
      },
    });
    plop.setGenerator("Component", {
      description: "Create a new Component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "Button",
          validate: (value) => {
            if (/.+/.test(value)) {
              return componentExists(value)
                ? "A component or container with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: (data) => {
        const patternImport = /\/\/ Import component here\n/g;
  
        const actions = [
          {
            type: "add",
            path: "src/components/{{pascalCase name}}/Layout/index.tsx",
            templateFile:
              "./__templates__/components/component_layout_index.js.hbs",
          },
          {
            type: "add",
            path: "src/components/{{pascalCase name}}/Layout/styles.ts",
            templateFile: "./__templates__/components/styles.js.hbs",
          },
          {
            type: "add",
            path: "src/components/{{pascalCase name}}/index.tsx",
            templateFile: "./__templates__/components/component_index.js.hbs",
          },
          {
            type: "add",
            path: "src/components/{{pascalCase name}}/data.ts",
            templateFile: "./__templates__/components/data.js.hbs",
          },
          {
            type: "modify",
            path: "src/components/index.ts",
            pattern: patternImport,
            templateFile: "./__templates__/components/import_component.js.hbs",
          },
          {
            type: "append",
            path: "src/components/index.ts",
            template: `export * from './{{pascalCase name}}';`,
          },
        ];
  
        return actions;
      },
    });
    plop.setGenerator("Basic Component", {
      description: "Create a new Basic Component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "Button",
          validate: (value) => {
            if (/.+/.test(value)) {
              return componentExists(value)
                ? "A component or container with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: (data) => {
        const patternImport = /\/\/ Import component here\n/g;
  
        const actions = [
          {
            type: "add",
            path: "src/components/Basics/{{pascalCase name}}/Layout/index.tsx",
            templateFile:
              "./__templates__/components/basic_component_layout_index.js.hbs",
          },
          {
            type: "add",
            path: "src/components/Basics/{{pascalCase name}}/Layout/styles.ts",
            templateFile: "./__templates__/components/styles.js.hbs",
          },
          {
            type: "add",
            path: "src/components/Basics/{{pascalCase name}}/index.tsx",
            templateFile:
              "./__templates__/components/basic_component_index.js.hbs",
          },
          {
            type: "add",
            path: "src/components/Basics/{{pascalCase name}}/data.ts",
            templateFile: "./__templates__/components/data.js.hbs",
          },
          {
            type: "modify",
            path: "src/components/Basics/index.ts",
            pattern: patternImport,
            templateFile: "./__templates__/components/import_component.js.hbs",
          },
          {
            type: "append",
            path: "src/components/Basics/index.ts",
            template: `export * from './{{pascalCase name}}';`,
          },
        ];
  
        return actions;
      },
    });
    plop.setGenerator("Headers", {
      description: "Create a specific header",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "Headers",
          validate: (value) => {
            if (/.+/.test(value)) {
              return componentExists(value)
                ? "A component or container with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: (data) => {
        const patternImport = /\/\/ Import component here\n/g;
  
        const actions = [
          {
            type: "add",
            path: "src/components/Headers/{{pascalCase name}}/Layout/index.tsx",
            templateFile:
              "./__templates__/components/component_layout_headers.js.hbs",
          },
          {
            type: "add",
            path: "src/components/Headers/{{pascalCase name}}/Layout/styles.ts",
            templateFile: "./__templates__/components/styles.js.hbs",
          },
          {
            type: "add",
            path: "src/components/Headers/{{pascalCase name}}/index.tsx",
            templateFile: "./__templates__/components/component_headers.js.hbs",
          },
          {
            type: "add",
            path: "src/components/Headers/{{pascalCase name}}/data.ts",
            templateFile: "./__templates__/components/data.js.hbs",
          },
          {
            type: "modify",
            path: "src/components/Headers/index.ts",
            pattern: patternImport,
            templateFile: "./__templates__/components/import_component.js.hbs",
          },
          {
            type: "append",
            path: "src/components/Headers/index.ts",
            template: `export * from './{{pascalCase name}}';`,
          },
        ];
  
        return actions;
      },
    });
    plop.setGenerator("Context", {
      description: "Create a new Context",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "usePerson",
          validate: (value) => {
            if (/.+/.test(value)) {
              return hooksExists(value)
                ? "A container with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: () => {
        const actions = [
          {
            type: "add",
            path: "src/context/{{pascalCase name}}.tsx",
            templateFile: "./__templates__/context/new_hook.js.hbs",
          },
          {
            type: "add",
            path: "src/utils/interfaces/context/{{pascalCase name}}Interfaces.ts",
            templateFile: "./__templates__/utils/interfacesContext.tsx.hbs",
          },
          {
            type: "append",
            path: "src/context/index.ts",
            templateFile: "./__templates__/context/import_export_hooks.js.hbs",
          },
          {
            type: "append",
            path: "src/utils/interfaces/context/index.ts",
            templateFile: "./__templates__/utils/export_interface.ts.hbs",
          },
        ];
        return actions;
      },
    });
/*     plop.setGenerator("Factory", {
      description: "Create a new Factory",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "PaymentFactory",
          validate: (value) => {
            if (/.+/.test(value)) {
              return factoryExists(value)
                ? "A factory with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: () => {
        const actions = [
          {
            type: "add",
            path: "src/utils/factories/{{pascalCase name}}Factory.tsx",
            templateFile: "./__templates__/utils/factory.tsx.hbs",
          },
          {
            type: "modify",
            path: "src/utils/factories/index.ts",
            pattern: /\/\/ export factory\n/g,
            templateFile: "./__templates__/utils/export_factoy.ts.hbs",
          },
        ];
        return actions;
      },
    });
    plop.setGenerator("Interfaces", {
      description: "Create a new interface",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "PaymentInterface",
          validate: (value) => {
            if (/.+/.test(value)) {
              return interfaceExists(value)
                ? "A component or container with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: () => {
        const actions = [
          {
            type: "add",
            path: "src/utils/interfaces/{{pascalCase name}}Interfaces.tsx",
            templateFile: "./__templates__/utils/interfacesContext.tsx.hbs",
          },
        ];
        return actions;
      },
    }); */
/*     plop.setGenerator("Api", {
      description: "Create a new API",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "PaymentApi",
          validate: (value) => {
            if (/.+/.test(value)) {
              return factoryExists(value)
                ? "A api with this name already exists"
                : true;
            }
            return "The name is required";
          },
        },
      ],
      actions: () => {
        const actions = [
          {
            type: "add",
            path: "src/utils/api/{{pascalCase name}}.ts",
            templateFile: "./__templates__/utils/api/api.ts.hbs",
          },
          {
            type: "append",
            path: "src/utils/api/index.ts",
            template: `export * from './{{pascalCase name}}';`,
          },
        ];
        return actions;
      },
    }); */
  };
  