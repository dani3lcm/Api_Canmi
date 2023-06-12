import IndicatorRepository from "../Repositories/indicator.repository"

class IndicatorService {
    indicatorRepository:IndicatorRepository;
    constructor() {
        this.indicatorRepository = new IndicatorRepository();
    }

    async getIndicators() {
        return await this.indicatorRepository.getIndicators();
    }

    async getIndicator(indicator_id:any) {
        return await this.indicatorRepository.getIndicator(indicator_id);
    }

    // async createState(State:any) {
    //     console.log('Service_createState');
    //     console.log(State);
    //     return await this.stateRepository.createState(State);
    // }

    // async updateState(Id:any, State:any) {
    //     return await this.stateRepository.updateState(Id, State);
    // }

    // async deleteState(Id:any) {
    //     return await this.stateRepository.deleteState(Id);
    // }

    async restoreIndicator(Id:any) {
        const testBaseRepository = await this.indicatorRepository.testBaseRepository(Id);
        console.log(testBaseRepository);
        return await this.indicatorRepository.restoreIndicator(Id);
    }

}

export default IndicatorService;