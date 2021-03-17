- pnpx create-nx-workspace@latest --packageManager pnpm
  - 11.5.1 used
  - "myorg"
  - empty
  - No NxCloud
- pnpm i @nrwl/react -D
- pnpm nx g @nrwl/react:lib
  - name? "ui-button"
- pnpm nx g @nrwl/react:storybook-configuration ui-button
  - configure cypress? y
  - automatically generate story files? y
  - spec files? ys
- pnpm nx run ui-button:storybook
  - starts on localhost:4400
- make changes to ui-button.tsx and see them reflected in the running storybook
  - rename to UIButton
  - change styling
  - add children prop

improvements:

- pnpm nx g @nrwl/react:storybook-configuration goes through the whole flow, but errors at the end "Required property 'name' is missing"
- drop react import from react generators?
- drop default export of lib react components?
