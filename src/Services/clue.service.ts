import ClueRepository from "../Repositories/clue.repository";

class ClueService {
    clueRepository:ClueRepository;
    constructor() {
        this.clueRepository = new ClueRepository();
    }

    async getClues() {
        return await this.clueRepository.getClues();
    }

    async getClue(entity_key:any, key_municipality:any) {
        return await this.clueRepository.getClue(entity_key, key_municipality);
    }


    async restoreClue(clue_id:any) {
        const testBaseRepository = await this.clueRepository.testBaseRepository(clue_id);
        console.log(testBaseRepository);
        return await this.clueRepository.restoreClue(clue_id);
    }

}

export default ClueService;