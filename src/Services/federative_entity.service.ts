import FederativeEntityRepository from "../Repositories/federative_entity.repository";

class FederativeEntityService {
    federativeEntityRepository:FederativeEntityRepository;
    constructor() {
        this.federativeEntityRepository = new FederativeEntityRepository();
    }

    async getFederativeEntities() {
        return await this.federativeEntityRepository.getFederativeEntities();
    }

    async getFederativeEntity(entity_key:any) {
        return await this.federativeEntityRepository.getFederativeEntity(entity_key);
    }


    async restoreFederativeEntity(entity_key:any) {
        const testBaseRepository = await this.federativeEntityRepository.testBaseRepository(entity_key);
        console.log(testBaseRepository);
        return await this.federativeEntityRepository.restoreFederativeEntity(entity_key);
    }

}

export default FederativeEntityService;