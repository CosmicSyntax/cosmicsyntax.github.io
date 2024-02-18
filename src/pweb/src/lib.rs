mod utils;

use chrono::Timelike;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() -> String {
    utils::set_panic_hook();

    let time = chrono::offset::Local::now();
    let hour = time.hour();

    if (4..12).contains(&hour) {
        // morning
        "m".to_string()
    } else if (12..17).contains(&hour) {
        // afternoon
        "a".to_string()
    } else if (0..4).contains(&hour) {
        // evening
        "l".to_string()
    } else {
        // late
        "e".to_string()
    }
}
