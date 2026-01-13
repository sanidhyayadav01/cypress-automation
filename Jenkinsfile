pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/sanidhyayadav01/cypress-automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Test') {
            steps {
                bat 'npx cypress run --spec "cypress/e2e/cucumber-bdd-tests/codenbox_practice.feature"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
