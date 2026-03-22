import type { AlmgStepperProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgStepperClasses } from '../../utils/classMap';

export function AlmgStepper({
  steps,
  activeStep,
  onStepChange,
  className,
  'data-testid': testId,
}: AlmgStepperProps) {
  return (
    <div data-testid={testId} className={className}>
      <div className={almgStepperClasses.stepper} role="tablist" aria-label="Progress">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          const canClick = step.isValid !== false && (isCompleted || index <= activeStep);

          return (
            <div
              key={index}
              className={cn(
                almgStepperClasses.step,
                isActive && almgStepperClasses.stepActive,
                isCompleted && almgStepperClasses.stepCompleted,
                !canClick && !isActive && almgStepperClasses.stepDisabled,
                canClick && almgStepperClasses.stepClickable,
              )}
              role="tab"
              aria-selected={isActive}
              aria-label={`Step ${index + 1}: ${step.label}`}
              onClick={() => canClick && onStepChange(index)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && canClick) {
                  e.preventDefault();
                  onStepChange(index);
                }
              }}
              tabIndex={canClick ? 0 : -1}
            >
              <span className={almgStepperClasses.stepNumber}>
                {isCompleted ? '✓' : index + 1}
              </span>
              <span className={almgStepperClasses.stepLabel}>{step.label}</span>
              {index < steps.length - 1 && (
                <span className={almgStepperClasses.stepConnector} />
              )}
            </div>
          );
        })}
      </div>
      <div className={almgStepperClasses.content} role="tabpanel">
        {steps[activeStep]?.content}
      </div>
    </div>
  );
}
