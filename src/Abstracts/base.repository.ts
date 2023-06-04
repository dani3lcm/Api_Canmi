import { Model } from "sequelize";

abstract class BaseRepository<Model> {
    public async testBaseRepository(Id:number) {
        return {
            test : "ok",
            Id
        };
    }
    // other common methods
}

export default BaseRepository