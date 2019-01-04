#!/usr/bin/env groovy

/**
* Set the package version here.
* `{major}.{minor}.{patch}`
*
* Jenkins populates the patch version with build number.
*/

String VERSION = "1.19.${env.BUILD_NUMBER}"

/* ---- DO NOT EDIT BELOW (unless you really know what you're doing) ---- */


String SERVER_ENV = ""
String TMP_FOLDER = ""
String NPM_TAG = "beta"
String REPO_SLUG = "form-design-system"
String BRANCH_NAME = "${env.BRANCH_NAME}"
String DOCKER_IMAGE_NAME = "${REPO_SLUG}:${env.BUILD_NUMBER}"
String GIT_TAG = "${VERSION}"

switch(BRANCH_NAME) {
  case "master":
    NPM_TAG = "latest"
    break
  default:
    GIT_TAG = "${VERSION}-beta"
    break
}

String CONTAINER_NAME = "fds-${GIT_TAG}"

pipeline {
  agent {
    label "slave"
  }

  stages {

    stage('Pull .npmrc file'){
      steps {
        sh "aws --region us-east-1 s3 cp s3://com.cbinsights.devops/certificates/npm-registry/npmrc npmrc"
      }
    }

    stage('Build Docker image'){
      steps {
        ansiColor('xterm'){
          sh "docker build -t ${DOCKER_IMAGE_NAME} ./"
        }
      }
    }

    stage('Start detached Docker container'){
      steps {
        ansiColor('xterm'){
          sh "docker container run -d -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock ${DOCKER_IMAGE_NAME}"
        }
      }
    }

    stage('Install Dependencies'){
      steps {
        sh "docker container exec -i yarn install --pure-lockfile"
        sh "docker container exec -i yarn bootstrap"

        // fail if yarn install produces unstaged changes (yarn.lock)
        sh "docker container exec -i git diff --exit-code"
      }
    }

    stage('Lint') {
      steps {
        ansiColor('xterm') {
          sh "docker container exec -i yarn lint"
        }
      }
    }

    stage('Test') {
      steps {
        ansiColor('xterm') {
          sh "docker container exec -i yarn test"
        }
      }
    }

    /*
    stage('Build') {
      steps {
        ansiColor('xterm') {
          sh "docker exec -i ${CONTAINER_NAME} yarn build:full"
          sh "docker exec -i ${CONTAINER_NAME} ls ./packages/fds-dictionary/"
        }
      }
    }

    stage('Publish npm packages') {
      steps {
        ansiColor('xterm') {
          sh "docker exec -i ${CONTAINER_NAME} yarn lerna publish --yes --force-publish --skip-git --npm-tag=${NPM_TAG} --repo-version=${GIT_TAG}"
        }
      }
    }

    stage('Git tag build'){
      steps {
        sh "git tag -a ${GIT_TAG} -m '${GIT_TAG} Tagged by Jenkins from branch ${BRANCH_NAME}'"
        sh "git push --tags"
      }
    }
    */

  }
}
