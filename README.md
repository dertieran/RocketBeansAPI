# RocketBeansAPI
Documentation of the RocketBeans API from the Community for the Community


The Documentation is written in [API Blueprint](https://apiblueprint.org) (Format [1A](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md)) and rendered with [Aglio](https://github.com/danielgtaylor/aglio).

## Usage
### Use Aglio executable
(Also see the [Aglio README](https://github.com/danielgtaylor/aglio/tree/master#executable))

Install aglio via NPM. You need Node.js installed and you may need to use `sudo` to install globally:

```bash
npm install -g aglio
```
#### Generating HTML
```bash
aglio --theme-variables flatly -i docs/rocketbeans.apib -o index.html
```
#### Run a live preview server on http://localhost:3000/
```bash
aglio --theme-variables flatly -i docs/rocketbeans.apib -s
```
### Use my custom scripts
Install dependencies
```bash
npm install
```
#### Generating HTML
```bash
npm run generate
```
#### Automatic generate on change
```bash
npm run watch
```
## Contribution
There are many ways to contribute to the Documentation, sending a Pull Request, testing the latest changes in the Documentation, filling a new issue or just confirming an issue reported by other user. If you have a problem and you are going to create a new issue, first check if another user have not been reported yet an issue similar to the yours, if not create a new issue.
### Pull Requests
1. Fork this project
3. Make your changes on the master branch or create a new one.
4. Commit the changes **(Try to be descriptive with descriptions on your commits)**.
5. Create a Pull Request.
6. The changes in the Pull Request must be for ```master``` branch, not for ```gh-pages```.
7. Explain as best as you can why and what are the changes in the Pull Request.
8. Wait for an owners to know if it is good to be landed in the Documentation or needs changes.

For more detail, you can read the [Basic git](https://github.com/loqui/im/wiki/Basic-git) guide.
