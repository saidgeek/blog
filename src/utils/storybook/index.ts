import React from 'react';
import { Story } from '@storybook/react';
import StorybookWrapper from './StorybookWrapper';

type ExtraProps<T> = {
  [P in keyof T | 'variants']:
    | string
    | number
    | boolean
    | Array<Record<string, unknown>>;
};

export const createTemplate = <T>(
  Component: React.FC<T>
): Story<ExtraProps<T>> => {
  const Template: Story<ExtraProps<T>> = (args) => {
    const variants = ((args.variants && args.variants) || [{}]) as Array<
      Record<string, unknown>
    >;
    return React.createElement(
      StorybookWrapper,
      null,
      variants.map((variant: Record<string, unknown>, index: number) =>
        React.createElement(Component, {
          ...args,
          ...variant,
          key: index,
        } as unknown as T)
      )
    );
  };
  return Template.bind({});
};

// TODO: How create argTypes of dynamic form
// type DocgenInfo = {
//   __docgenInfo: {
//     [key: string]: unknown;
//   };
// };

// export const genDocs = <T>(prefix: string, Component: React.FC<T>): Meta => {
//   console.log(JSON.stringify(Component));
//   const docgenInfo = Component.__docgenInfo;
//   console.log({ docgenInfo });

//   const data = {
//     argTypes: {},
//   };

//   Object.keys(docgenInfo.props).forEach((propKey) => {
//     if (docgenInfo.props[propKey].type.name === 'enum') {
//       data.argTypes[docgenInfo.props[propKey].name] = {
//         options: docgenInfo.props[propKey].type.value.map(({ value }) =>
//           JSON.parse(value)
//         ),
//         control: {
//           type: 'select',
//           labels: docgenInfo.props[propKey].type.value.reduce(
//             (prev: Record<string, string>, { value }) => {
//               value = JSON.parse(value);
//               prev[value] = value
//                 .replace(/([a-z])(?=[A-Z])/g, '$1 ')
//                 .toLowerCase();
//               return prev;
//             },
//             {}
//           ),
//         },
//       };
//     }
//   });

//   return {
//     title: `${prefix}/${docgenInfo.displayName}`,
//     component: Component,
//     ...data,
//   };
// };
