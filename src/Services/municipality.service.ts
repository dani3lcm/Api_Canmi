import MunicipalityRepository from "../Repositories/municipality.repository";

class MunicipalityService {
    municipalityRepository:MunicipalityRepository;
    constructor() {
        this.municipalityRepository = new MunicipalityRepository();
    }

    async getMunicipalities() {
        return await this.municipalityRepository.getMunicipalities();
    }

    async getMunicipality(entity_key:any) {
        return await this.municipalityRepository.getMunicipality(entity_key);
    }


    async restoreMunicipality(entity_key:any) {
        const testBaseRepository = await this.municipalityRepository.testBaseRepository(entity_key);
        console.log(testBaseRepository);
        return await this.municipalityRepository.restoreMunicipality(entity_key);
    }

}

export default MunicipalityService;