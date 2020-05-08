# joshuadowding.github.io
Personal website, portfolio and blog.

[![CodeFactor](https://www.codefactor.io/repository/github/joshuadowding/joshuadowding.github.io/badge)](https://www.codefactor.io/repository/github/joshuadowding/joshuadowding.github.io)

## Installation & Deployment
Since we're using Jekyll to build this static website, we need [Ruby](https://rubyinstaller.org/) to install the following gems:
```bash
gem install wdm rake bundler tzinfo-data github-pages
```
Once we've cloned the repository, we can navigate to the project directory and run the following command to launch the website:
```bash
bundle exec jekyll serve (optional: --incremental --host 0.0.0.0)
```
