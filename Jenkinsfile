pipeline {
    agent any 
    stages {
        stage('Checkout') { 
            steps {
                git branch: 'main', url: 'https://github.com/rithu13/Project.git' 
            }
        }
        stage('Compile') { 
            steps {
                bat 'javac -d . src/*.java' // Compile Java files in the src directory
            }
        }
        stage('Package') { 
            steps {
                bat 'jar cvf myproject.jar *.class' // Package compiled classes into a JAR file
            }
        }
    }
    post { 
        success { 
            echo 'Build succeeded! Deploy now...'
            // Add deployment steps here if needed
        }
        failure { 
            echo 'Build failed! Take necessary actions...'
            // Add failure handling steps here if needed
        }
    }
}
