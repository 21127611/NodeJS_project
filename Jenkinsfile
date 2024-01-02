pipeline {
    agent any
    stages {
        stage('Build Docker Nodejs Image') {
            steps {
                sh "docker build -t hoanganhcun123/nodejs_docker ."
            }
        }
        stage('Push to Hub') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                        sh 'docker push hoanganhcun123/nodejs_docker:latest'
                    }
                }
            }
        }
        stage('Deploy Nodejs') {
            steps {
                sh 'docker start nodejs_server || docker run -d --name nodejs_server --publish 8081:8081 hoanganhcun123/nodejs_docker:latest'
            }
        }
        stage('Test') {
            steps {
                sh "docker exec --tty nodejs_server curl https://localhost:8081"
            }
        }
    }
}