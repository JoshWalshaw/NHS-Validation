export class NHSNumber {
  /**
   * Takes a 9-digit number, and generates the final checksum value in order to make it NHS complaint
   *
   * @see https://en.wikipedia.org/wiki/NHS_number
   *
   * @param input - The number we'd want to generate the checksum for
   *
   * @returns string - as we want to ensure that the number can begin with 0, and avoids any weird Javascript math issues.
   */
  private static generateMod11(input: string): string {
    // Remove anything that isn't numeric.
    input = input.replaceAll(/\D/gi, '');
    // The checksum is calculated by multiplying each of the first nine digits by 11 minus its position.
    input = input.substring(0, 9);

    const digits = input.split(''); // split the string into individual characters
    let sum = 0;
    let weight = 10;

    /**
     * The first digit is multiplied by 10.
     * The second digit is multiplied by 9.
     * And so on until the ninth digit is multiplied by 2.
     */
    digits.forEach(function (digit, k) {
      if (weight < 2) return;
      sum += Number(digit) * weight; // The result of this calculation is summed.
      weight--;
    });

    // The remainder when dividing this number by 11 is calculated, yielding a number in the range 0–10.
    const remainder = sum % 11;

    // Finally, this number is subtracted from 11 to give the checksum in the range 1–11
    let checksum = 11 - remainder;

    //A checksum of 11 is represented by 0 in the final NHS number.
    if (checksum === 11) {
      checksum = 0;
    }
    // If the checksum is 10 then the number is not valid
    if (checksum === 10) {
      throw 'Input not valid NHS Number';
    }

    // Return value appended as a string to ensure that leading 0's aren't lost
    return input + String(checksum);
  }

  /**
   * Used to check if a string provided is a valid NHS compliant number or not.
   *
   * @param input - The number that wants to be validated.
   *
   * @returns boolean
   */
  public static validate(input: string): boolean {
    // Remove anything that isn't numeric
    input = input.replaceAll(/\D/gi, '');

    // NHS numbers have to be 10 characters long
    if (input.length !== 10) return false;

    return this.generateMod11(input) === input;
  }

  /**
   * Generates and returns a single NHS compliant number
   *
   * TODO - May look at having an option to limit the attempts, with it being a potential infinite loop.
   *
   * @returns string - an example NHS compliant number
   */
  public static generate(): string {
    let attempt = '';

    while (true) {
      attempt = String(Math.random()).substring(2, 12);

      try {
        if (this.validate(attempt)) {
          break;
        }
      } catch (error) {
        continue;
      }
    }

    return attempt;
  }
}
