# Installation
	MacOS
		brew install yarn

# Upgrade
	MacOS
		brew upgrade yarn
		yarn --version
# Usage
	Starting a new project
		yarn init

	Adding a dependency
		yarn add [package]
		yarn add [package]@[version]
		yarn add [package]@[tag]

	Adding a dependency to different categories of dependencies
		yarn add [package] --dev
		yarn add [package] --peer
		yarn add [package] --optional

	Upgrading a dependency
		yarn upgrade [package]
		yarn upgrade [package]@[version]
		yarn upgrade [package]@[tag]

	Removing a dependency
		yarn remove [package]

	Installing all the dependencies of project
		yarn or yarn install

# Migrating from npm
	If you want to try Yarn out on your existing npm project, just try running:
		yarn
	This will lay out your node_modules folder using Yarn’s resolution algorithm that is compatible with the node.js module resolution algorithm.

	Later, if you decide that Yarn is not for you, you can just go back to using npm without making any particular changes. You can delete your old yarn.lock file if nobody on the project is using Yarn any more but it’s not necessary.

# Reference:
	
	https://yarnpkg.com/en/docs/getting-started

