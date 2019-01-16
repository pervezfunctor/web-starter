# Web Starter

Web development using [parcel](https://parceljs.org/), [eslint](http://eslint.org/) for linting Javascript, [tslint](https://palantir.github.io/tslint/) for linting Typescript, [prettier](https://prettier.io/) for formatting Javascript/Typescript files.

## Usage

1.  Install [nodejs](https://nodejs.org/en/). I highly recommend using [nvm](https://github.com/creationix/nvm). If you are on mac or ubuntu, you could use the following command to install nodejs. It's from my [lean-dotfiles](https://gitlab.com/seartipy/lean-dotfiles) configuration.

    On Mac

         curl -L j.mp/srtpldf > setup && bash setup web

    On Ubuntu

         wget -qO- j.mp/srtpldf > setup && bash setup web

2.  Clone this repository, install npm packages and open the project in visual studio code. Make sure you have [git](https://git-scm.com/) installed.

        npm install -g yarn
        git clone --depth=1 https://gitlab.com/pervezfunctor/web-starter.git && cd web-starter && rm -rf .git
        yarn install
        code .

3.  Start server using the following command.

        yarn start

    Now you can edit `src/index.tsx` in any editor and see your changes in browser immediately.
    You could use `yarn test` to run jest tests.
    You could use `yarn verify` for checking types and linting all files in `src` folder.

4)  Setup your editor

    If you use `visual studio code`, install the recommended `visual studio code extensions` in `~/.vscode/extensions.json`. On Mac, you might have to [install shell command](https://code.visualstudio.com/docs/setup/mac).

## License

MIT
