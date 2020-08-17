//----------------------------PROBLEMA 1------------------------------
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay();
    console.log('1 segundo');
    await delay();
    console.log('2 segundos');
    await delay();
    console.log('3 segundos');
}

umPorSegundo();


//----------------------------PROBLEMA 2------------------------------
import axios from 'axios';

async function getUserFromGithub(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);            
        
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}

getUserFromGithub('marismarcosta');
getUserFromGithub('diego3g123987');


//----------------------------PROBLEMA 3------------------------------
class Github {
    static async getRepositories(repo) {
        try {
            const response = axios.get(`https://api.github.com/repos/${repo}`);

            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('marismarcosta/rocket-starter');
Github.getRepositories('rocketseat/dasjdheith');