import { Model } from "sequelize";

abstract class BaseRepository<Model> {
    public async testBaseRepository(Id:number) {
        return {
            test : "ok_testBaseRepository",
            Id
        };
    }
    // other common methods
}

export default BaseRepository