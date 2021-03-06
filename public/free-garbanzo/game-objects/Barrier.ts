import {IBarrier} from "../models/IBarrier";
import {IGameObject} from "../models/IGameObject";
import {ICoordinates} from "../models/ICoordinates";

class Barrier implements IBarrier {
    public position: ICoordinates;
    public constructor() {}
}

export default Barrier;
