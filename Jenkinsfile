pipeline {
    agent any // Use any available agent (Jenkins will allocate an executor for this Pipeline)
    stages {
        stage('Checkout') { // Checkout stage to clone the repository
            steps {
                git branch: 'main', url: 'https://github.com/rithu13/Project.git' // Clone the repository
            }
        }
        stage('Build') { // Build stage to build the project
            steps {
                bat 'mvn clean install' // Execute Maven clean install to build the project
            }
        }
        stage('Test') { // Test stage to run tests
            steps {
                bat 'mvn test' // Execute Maven test to run unit tests
            }
        }
    }
    post { // Post-build actions
        success { // Actions to perform if the Pipeline succeeds
            echo 'Build and test succeeded! Deploy now...'
            // Add deployment steps here if needed
        }
        failure { // Actions to perform if the Pipeline fails
            echo 'Build or test failed! Take necessary actions...'
            // Add failure handling steps here if needed
        }
    }
}
