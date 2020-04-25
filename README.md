# rook

Component library / Design system that will be used in my recent ongoing side projects
  - This library is tied and developed with styled components in mind as its main config provider

In your project, add the code below
    ```
    <ThemeProvider theme={theme}>

    </ThemeProvider>
    ```

There are a few tradeoffs in using this pattern
  1. Layout will be using 


To use this in development mode, 
npm link ./../your_lib/node_modules/react

This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.
https://reactjs.org/warnings/invalid-hook-call-warning.html

