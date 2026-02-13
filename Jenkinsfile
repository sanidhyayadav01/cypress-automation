pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // NodeJS installation name in Jenkins
    }

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

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate ./cypress/reports/allure-results --clean -o ./cypress/reports/allure-report'
            }
        }
    }

    post {
        always {
            allure(
                includeProperties: false,
                results: [[path: 'cypress/reports/allure-results']]
            )
            echo 'Pipeline finished!'
        }
    }
}
