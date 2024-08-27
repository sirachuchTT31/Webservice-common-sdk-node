// export { CovertUTC0000 } from './utils/utils'
import { CovertUTC0000 } from "./utils/utils";

declare namespace Utils {
    var Convert: typeof CovertUTC0000;
}

export = Utils;