import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ColorService {

   colorMap = new Map<string, string>([
    ['Mamba Green Metallic', '#088F4C'],
    ['Ice Grey Metallic', '#E5E5E5'],
    ['Jet Black Metallic', '#0A0A0A'],
    ['Dolomite Silver Metallic', '#C0C0C0'],
    ['Gentian Blue Metallic', '#0033A0'],
    ['Mahogany Metallic', '#4A0404'],
    ['Moonlight Blue Metallic', '#1B2F4A'],
    ['Night Blue Metallic', '#002147'],
    ['GT Silver Metallic', '#A5A5A5'],
    ['White', '#FFFFFF'],
    ['Black', '#000000'],
    ['Carmine Red', '#960018'],
    ['Chalk', '#CCC5B9'],
    ['Python Green', '#116530'],
    ['Arctic Grey', '#ACBCC9'],
    ['Guards Red', '#FF0000'],
    ['Papaya Metallic', '#FFA07A'],
    ['Crayon', '#A3A3A3'],
    ['Shark Blue', '#006994'],
    ['Racing Yellow', '#FFE700'],
    ['Lizard Green', '#32CD32'],
    ['Ultraviolet', '#645394']
  ]);

  getColorHex(colorName: string): string {
    return this.colorMap.get(colorName) || '#CCCCCC'; // Default to grey if color not found
  }
} 