import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";

@Injectable()
export class StorageService {
    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        return usr == null ? null : JSON.parse(usr);        
    }

    setLocalUser(obj : LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}