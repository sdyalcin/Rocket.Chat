import { Base } from './_Base';
import { IRoom } from '../../../events/definitions/IRoom';

declare class RoomsClass extends Base<IRoom> {}

declare const Rooms: RoomsClass;

export default Rooms;
