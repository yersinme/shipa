export const styleState = ref(true);

export const TogglestyleState = () => {
    styleState.value = !styleState.value;
};