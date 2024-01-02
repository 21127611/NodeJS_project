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
                sh 'docker start node_server || docker run -d --name node_server -p 8081:8081 hoanganhcun123/nodejs_docker'
            }
        }
        stage('Test') {
            steps{
                sh 'docker exec --tty container curl https://localhost:8081/'
            }
        }
    }
}