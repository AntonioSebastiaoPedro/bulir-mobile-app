import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-surface-card p-6">
      <View className="w-full max-w-sm rounded-3xl bg-surface-light p-6 shadow-sm border border-slate-100 items-center">
        {/* Brand Icon Badge */}
        <View className="w-14 h-14 rounded-2xl bg-primary-light border border-primary/30 items-center justify-center mb-4">
          <View className="w-6 h-6 rounded-full bg-primary" />
        </View>

        {/* Title & Subtitle */}
        <Text className="text-2xl font-bold text-navy-900 text-center mb-1">
          Bulir Mobile
        </Text>
        <Text className="text-sm text-text-muted text-center mb-5">
          NativeWind v4 &amp; Tailwind CSS configurados com sucesso!
        </Text>

        {/* Color Palette Indicators */}
        <View className="w-full bg-surface-card rounded-2xl p-4 border border-slate-100 mb-4">
          <Text className="text-xs font-semibold text-navy-800 mb-2 uppercase tracking-wider">
            Paleta de Cores
          </Text>
          <View className="flex-row items-center gap-2 mb-2">
            <View className="w-4 h-4 rounded-full bg-primary" />
            <Text className="text-xs text-navy-900 font-medium">Primary: #27D9A7</Text>
          </View>
          <View className="flex-row items-center gap-2 mb-2">
            <View className="w-4 h-4 rounded-full bg-navy-900 border border-slate-200" />
            <Text className="text-xs text-navy-900 font-medium">Navy 900: #0B192C</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="w-4 h-4 rounded-full bg-text-muted" />
            <Text className="text-xs text-text-muted font-medium">Text Muted: #64748B</Text>
          </View>
        </View>

        <View className="w-full bg-navy-900 py-3.5 rounded-full items-center active:opacity-90">
          <Text className="text-sm font-semibold text-white">
            Iniciar Aplicação
          </Text>
        </View>
      </View>
    </View>
  );
}
