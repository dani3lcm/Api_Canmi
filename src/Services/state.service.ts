import StateRepository from "../Repositories/state.repository"

class StateService {
    stateRepository:StateRepository;
    constructor() {
        this.stateRepository = new StateRepository();
    }

    async getStates() {
        return await this.stateRepository.getStates();
    }

    async getState(Id:any) {
        return await this.stateRepository.getState(Id);
    }

    async createState(State:any) {
        console.log('Service_createState');
        console.log(State);
        return await this.stateRepository.createState(State);
    }

    async updateState(Id:any, State:any) {
        return await this.stateRepository.updateState(Id, State);
    }

    async deleteState(Id:any) {
        return await this.stateRepository.deleteState(Id);
    }

}

export default StateService;