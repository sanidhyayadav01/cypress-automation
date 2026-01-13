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
                // Run a specific feature file if using Cypress Cucumber
                bat 'npx cypress run --spec "cypress/e2e/sample.feature"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
