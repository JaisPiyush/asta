export class AstaError extends Error {}

export class ChainAgnosticError extends AstaError {}

export class ExpectingTestToFail extends Error {}

export class InvalidChainAgnosticArgument extends ChainAgnosticError {
  constructor(propertyName: string, propertyValue: string, parentName = '') {
    super(
      `Invalid argument (${parentName}${propertyName} does not accept '${propertyValue}' as value)`,
    );
  }
}

export class MissingChainAgnosticArgument extends ChainAgnosticError {
  constructor(propertyName: string) {
    super(`Missing argument (${propertyName} not provided)`);
  }
}

export class FailedFormatDueToMissingArgument extends ChainAgnosticError {
  constructor(propertyName: string) {
    super(`Failed to format, ${propertyName} is missing`);
  }
}
