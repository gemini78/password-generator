import * as Generator from 'generate-password-browser';
import { Settings } from './types';

export class PasswordGeneratorService {
    generate(setting: Settings) {
        return Generator.generate(setting)
    }
}